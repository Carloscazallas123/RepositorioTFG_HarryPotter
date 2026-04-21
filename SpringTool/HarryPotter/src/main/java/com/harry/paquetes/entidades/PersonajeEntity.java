awwpackage com.harry.paquetes.entidades;

import java.io.Serializable;
import java.util.List;

import jakarta.persistence.*;


@Entity
@Table(name = "PERSONAJE")
public class PersonajeEntity implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID_PERSONAJE")
	private int idpersonaje;

	@Column(name = "NOMBRE")
	private String nombre;

	@Column(name = "DESCRIPCION")
	private String descripcion;
	
	@Column(name = "CASA")
	private String casa;
	
	//Relacion 1:N Objeto <-> Personaje
	@OneToMany(mappedBy = "personaje", cascade = CascadeType.ALL)
    private List<ObjetoEntity> objetos;

	public int getIdpersonaje() {
		return idpersonaje;
	}

	public void setIdpersonaje(int idpersonaje) {
		this.idpersonaje = idpersonaje;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public String getCasa() {
		return casa;
	}

	public void setCasa(String casa) {
		this.casa = casa;
	}

	public List<ObjetoEntity> getObjetos() {
		return objetos;
	}

	public void setObjetos(List<ObjetoEntity> objetos) {
		this.objetos = objetos;
	}
	
	
}
