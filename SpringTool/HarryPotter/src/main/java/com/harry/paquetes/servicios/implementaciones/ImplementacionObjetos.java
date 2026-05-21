package com.harry.paquetes.servicios.implementaciones;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.harry.paquetes.dtos.objeto.CompraDTO;
import com.harry.paquetes.dtos.objeto.ObjetoInvDTO;
import com.harry.paquetes.dtos.objeto.ObjetoTiendDTO;
import com.harry.paquetes.dtos.usuario.UsuarioFullDTO;
import com.harry.paquetes.entidades.CompraEntity;
import com.harry.paquetes.entidades.ObjetoEntity;
import com.harry.paquetes.entidades.PersonajeEntity;
import com.harry.paquetes.repositorios.RepoCompras;
import com.harry.paquetes.repositorios.RepoObjetos;
import com.harry.paquetes.repositorios.RepoPersonajes;
import com.harry.paquetes.repositorios.RepoUsuarios;
import com.harry.paquetes.servicios.interfaces.InterfazObjeto;

@Service
public class ImplementacionObjetos implements InterfazObjeto {

	@Autowired
	private RepoPersonajes PersonajesRepo;
	@Autowired
	private RepoCompras ComprasRepo;
	@Autowired
	private RepoUsuarios UsuarioRepo;
	@Autowired
	private RepoObjetos repositorioObjetos;

	@Override
	public List<ObjetoTiendDTO> mostrartienda() {
		List<ObjetoEntity> listaentidades = repositorioObjetos.ObtenerAllObjetos();
		List<ObjetoTiendDTO> listatienda = new ArrayList<>();
		int aleatorio = 0;
		// Hacemos un bucle for de 6 veces y vamos
		// Rellenando la lista de las tiendas bajo posiciones aleatorias
		for (int i = 0; i < 6; i++) {
			aleatorio = (int) (Math.random() * listaentidades.size());
			listatienda.add(new ObjetoTiendDTO(listaentidades.get(aleatorio).getIdobjeto(),
					listaentidades.get(aleatorio).getNombre(), listaentidades.get(aleatorio).getDescripcion(),
					listaentidades.get(aleatorio).getCosto()));
			listaentidades.remove(aleatorio);
		}

		return listatienda;
	}

	@Override
	public List<ObjetoInvDTO> mostrarinventario(List<Integer> listaobjetosusuario) {
		List<ObjetoInvDTO> listainventario = new ArrayList<>();
		for (int i = 0; i < listaobjetosusuario.size(); i++) {
			ObjetoEntity entidad = repositorioObjetos.ObtenerPorid(listaobjetosusuario.get(i));
			listainventario.add(new ObjetoInvDTO(entidad.getIdobjeto(), entidad.getNombre(), entidad.getDescripcion(),
					entidad.getCosto(), entidad.getPersonaje().getNombre()));
		}
		return listainventario;
	}

	@Override
	public UsuarioFullDTO comprarobjeto(CompraDTO compra) {
		List<Integer> listausuario = compra.getUsuario().getObjetos();
		List<Integer> listapersonajes = compra.getUsuario().getPersonajes();
		boolean yacomprado = false;
		UsuarioFullDTO usuario = compra.getUsuario();
		for (int i = 0; i < listausuario.size(); i++) {
			if (listausuario.get(i) == compra.getIdobjeto()) {
				yacomprado = true;
			}
		}

		if (yacomprado == false) {
			if (compra.getUsuario().getPuntos() <= 0) {
				System.out.println("No tiene puntos");
			} else {
				ObjetoEntity objeto = repositorioObjetos.ObtenerPorid(compra.getIdobjeto());
				CompraEntity compranueva = new CompraEntity();
				if (compra.getUsuario().getPuntos() > objeto.getCosto()) {
					System.out.println("Comprando Producto...");
					compranueva.setObjeto(repositorioObjetos.ObtenerPorid(compra.getIdobjeto()));
					compranueva.setUsuario(UsuarioRepo.ObtenerPorid(usuario.getIdusuario()));
					compranueva.getUsuario()
							.setPuntos(compranueva.getUsuario().getPuntos() - compranueva.getObjeto().getCosto());
					ComprasRepo.save(compranueva);
					usuario.getObjetos().add(compranueva.getObjeto().getIdobjeto());
					usuario.setPuntos(usuario.getPuntos() - compranueva.getObjeto().getCosto());
				} else {
					System.out.println("Precio mayor a los puntos el usuario");
				}

			}

		} else {
			System.out.println("Objeto ya comprado");
		}
		List<PersonajeEntity> listanueva = PersonajesRepo.findNuevosPersonajes(listausuario, listapersonajes);
		rellenarpersonajes(usuario, listanueva);

		return usuario;
	}

	public void rellenarpersonajes(UsuarioFullDTO usuario, List<PersonajeEntity> listaentidades) {
		for (int i = 0; i < listaentidades.size(); i++) {
			usuario.getPersonajes().add(listaentidades.get(i).getIdpersonaje());
			System.out.println("Personaje encontrado: " + listaentidades.get(i).getNombre());
		}

	}
}
