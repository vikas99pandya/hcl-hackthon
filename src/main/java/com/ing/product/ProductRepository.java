package com.ing.product;

import java.util.List;

import com.ing.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ing.models.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer>{
	List<Product> findByGroupId(Integer groupId);
	List<Product> findByUserId(Integer userId);

}
