package Beans;

public class AttrazioneTuristica {

	private String nome;
	private String descrizione;
	private double x;
	private double y;
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getDescrizione() {
		return descrizione;
	}
	public void setDescrizione(String descrizione) {
		this.descrizione = descrizione;
	}
	public double getX() {
		return x;
	}
	public void setX(double x) {
		this.x = x;
	}
	public double getY() {
		return y;
	}
	public void setY(double y) {
		this.y = y;
	}
	public AttrazioneTuristica() {
		this.x=0;
		this.y=0;
		this.nome="";
		this.descrizione="";
		
	}
	@Override
	public String toString() {
		return "AttrazioneTuristica [nome=" + nome + ", descrizione="
				+ descrizione + ", x=" + x + ", y=" + y + "]";
	}
	
	
	
}
