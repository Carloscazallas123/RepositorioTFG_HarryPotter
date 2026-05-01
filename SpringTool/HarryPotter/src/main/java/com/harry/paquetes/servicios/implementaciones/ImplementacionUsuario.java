package com.harry.paquetes.servicios.implementaciones;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.harry.paquetes.dtos.usuario.RegistroDTO;
import com.harry.paquetes.dtos.usuario.SesionDTO;
import com.harry.paquetes.dtos.usuario.UsuarioFullDTO;
import com.harry.paquetes.entidades.UsuarioEntity;
import com.harry.paquetes.repositorios.RepoUsuarios;
import com.harry.paquetes.servicios.interfaces.InterfazUsuario;

@Service
public class ImplementacionUsuario implements InterfazUsuario {

	@Autowired
	private RepoUsuarios repositoriousuarios;

	@Override
	public UsuarioFullDTO registrarusuario(RegistroDTO registro) {
		// Primero obtenemos todos los usuarios
		List<UsuarioEntity> listausuarios = repositoriousuarios.ObtenerAllUsuarios();
		boolean existente;
		UsuarioFullDTO usuario = null;
		// Usamos un metodo externo para comprobar si existe o no
		existente = comprobarexistenciaR(listausuarios, registro);

		// Si no existe, crea la nueva entidad y el DTO
		if (existente = false) {
			// Creacion de la Entidad
			UsuarioEntity entidad = new UsuarioEntity();
			entidad.setContra(registro.getContraseña());
			entidad.setNombre(registro.getNombre());
			entidad.setPuntos(0);
			entidad.setCasa(null);
			repositoriousuarios.save(entidad);
			// Creacion del DTO
			usuario = new UsuarioFullDTO(entidad.getIdusuario(), entidad.getNombre(), entidad.getCorreo(),
					new ArrayList<Integer>(),new ArrayList<Integer>());
		} else { // Caso contrario, envia un DTO null para fallar
			usuario = null;
		}

		return usuario;
	}

	@Override
	public UsuarioFullDTO iniciarsesionusuario(SesionDTO sesion) {
		// Primero obtenemos todos los usuarios
		List<UsuarioEntity> listausuarios = repositoriousuarios.ObtenerAllUsuarios();
		UsuarioFullDTO usuario = null;
		// Usamos un metodo externo para obtener el DTO
		usuario = comprobarexistenciaS(listausuarios, sesion);

		//Si nos devuelve el DTO nulo, salta el mensaje de no encontrado
		//Por lo que devolverá nulo. Caso contrario, salta el mensaje de
		//encontrado
		if(usuario==null) {
			System.out.println("Usuario No encontrado");
		} else {
			System.out.println("Usuario Encontrado");
		}
		return usuario;
	}

	// ---------------- Procesos Externos -------------------------

	// ---------- | Comprobar Existencia en base a Registarse
	public boolean comprobarexistenciaR(List<UsuarioEntity> Lista, RegistroDTO registo) {
		boolean existe = false;
		for (int i = 0; i < Lista.size(); i++) {
			if (Lista.get(i).getCorreo().equals(registo.getEmail())) {
				existe = true;
			}
		}
		return existe;
	}

	// ---------- | Comprobar Existencia en base a Iniciar Sesion
	public UsuarioFullDTO comprobarexistenciaS(List<UsuarioEntity> Lista, SesionDTO sesion) {
		UsuarioEntity entidad = null;
		boolean existe = false;
		UsuarioFullDTO usuario = null;
		for (int i = 0; i < Lista.size(); i++) {
			if (Lista.get(i).getNombre().equals(sesion.getNombre())) {
				existe = true;
				entidad = Lista.get(i);
			}
			existe = false;
		}
		// Si existe, crea el nuevoDTO
		if (existe = true) {
			usuario = new UsuarioFullDTO(entidad.getIdusuario(), entidad.getNombre(), entidad.getCorreo(),
					new ArrayList<Integer>(), new ArrayList<Integer>());
		} else {
			usuario = null;
		}

		return usuario;
	}
}
