package beans;

public class Article {

	public Article() {
		// TODO Auto-generated constructor stub
	}
	
	private String id;
	private String text;
	private boolean acceduto;
	private int permission;
	
	public int getPermission() {
		return permission;
	}
	public void setPermission(int permission) {
		this.permission = permission;
	}
	public boolean isAcceduto() {
		return acceduto;
	}
	public void setAcceduto(boolean acceduto) {
		this.acceduto = acceduto;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getText() {
		return text;
	}
	public void setText(String text) {
		this.text = text;
	}

}
