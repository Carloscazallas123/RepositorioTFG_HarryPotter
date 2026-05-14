package com.harry.paquetes.dtos.usuario;
//Este DTO sirve para guardar los puntos del usuario 
public class UsuarioPuntosDTO {

	private UsuarioFullDTO usuario;
	private int puntos;
	
	public UsuarioPuntosDTO(UsuarioFullDTO usuario, int puntos) {
		this.usuario = usuario;
		this.puntos = puntos;
	}


	public UsuarioFullDTO getUsuario() {
		return usuario;
	}


	public void setUsuario(UsuarioFullDTO usuario) {
		this.usuario = usuario;
	}


	public int getPuntos() {
		return puntos;
	}


	public void setPuntos(int puntos) {
		this.puntos = puntos;
	}
	
	
}
