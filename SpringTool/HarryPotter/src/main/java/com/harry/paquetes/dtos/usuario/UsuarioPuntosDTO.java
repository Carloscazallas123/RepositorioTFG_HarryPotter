package com.harry.paquetes.dtos.usuario;
//Este DTO sirve para guardar los puntos del usuario 
public class UsuarioPuntosDTO {

	private UsuarioFullDTO usuario;
	private int puntaje;
	
	public UsuarioPuntosDTO(UsuarioFullDTO usuario, int puntaje) {
		this.usuario = usuario;
		this.puntaje = puntaje;
	}
	
	public UsuarioPuntosDTO() { }


	public UsuarioFullDTO getUsuario() {
		return usuario;
	}


	public void setUsuario(UsuarioFullDTO usuario) {
		this.usuario = usuario;
	}


	public int getPuntos() {
		return puntaje;
	}


	public void setPuntos(int puntos) {
		this.puntaje = puntos;
	}
	
	
}
