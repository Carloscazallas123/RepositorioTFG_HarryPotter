package com.harry.paquetes.servicios.interfaces;

import java.util.List;

import com.harry.paquetes.dtos.objeto.ObjetoInvDTO;
import com.harry.paquetes.dtos.objeto.ObjetoTiendDTO;

//Interfaz para las implentaciones de los Objetos
public interface InterfazObjeto {

	//Metodo para mostrar los objetos en la tienda 
	List<ObjetoTiendDTO>mostrartienda();
	
	//Metodo para mostrar los objetos en el apartado inventario
	List<ObjetoInvDTO>mostrarinventario();
}
