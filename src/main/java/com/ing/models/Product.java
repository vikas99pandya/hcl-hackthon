package com.ing.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Product {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private String name;
	@ManyToOne
	private User user;
	@ManyToOne
	private ProductGroup group;
	
	public Product(int id, String name, int userId, int groupId) {
		super();
		this.id = id;
		this.name = name;
		this.user = new User(userId, "", "", "");
		this.group = new ProductGroup(groupId, "");
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public ProductGroup getGroup() {
		return group;
	}
	public void setGroup(ProductGroup group) {
		this.group = group;
	}
	
	
}
