package com.harry.paquetes.dtos.objeto;

import com.harry.paquetes.dtos.usuario.UsuarioFullDTO;

//Este Dto es para mostrar todos los objetos 
//Que ha comprado el usuario en su inventario
public class CompraDTO {
	
	private UsuarioFullDTO usuario;
	private int idobjeto;
	
	public CompraDTO(UsuarioFullDTO usuario, int idobjeto) {
		super();
		this.usuario = usuario;
		this.idobjeto = idobjeto;
	}

	public UsuarioFullDTO getUsuario() {
		return usuario;
	}

	public void setUsuario(UsuarioFullDTO usuario) {
		this.usuario = usuario;
	}

	public int getIdobjeto() {
		return idobjeto;
	}

	public void setIdobjeto(int idobjeto) {
		this.idobjeto = idobjeto;
	}
	
	
	
	


	
}
