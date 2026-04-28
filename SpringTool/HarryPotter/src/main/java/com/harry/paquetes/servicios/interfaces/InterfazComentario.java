package com.harry.paquetes.servicios.interfaces;

import java.util.List;

import com.harry.paquetes.dtos.comentario.ComentarDTO;
import com.harry.paquetes.dtos.comentario.ComentarioMostDTO;

//Interfaz para la implementacion de los Comentarios
public interface InterfazComentario {

	//Metodo para mostrar los comentarios
	List<ComentarioMostDTO>mostrarcomentarios();
	
	//Metodo para crear/editar el comentario
	ComentarDTO comentar(ComentarDTO comentario);
}
