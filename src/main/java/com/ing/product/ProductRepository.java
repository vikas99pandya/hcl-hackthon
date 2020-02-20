package com.ing.product;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ing.models.Product;

public interface ProductRepository extends JpaRepository<Product, Integer>{
	List<Product> findByGroupId(Integer groupId);
}
