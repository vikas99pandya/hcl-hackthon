package com.ing.product;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ing.models.Product;
import com.ing.models.ProductDetails;
import com.ing.models.ProductGroup;

public interface ProductService {

	List<ProductGroup> getAllProductGroups();

	List<Product> getProducts(int groupId);
	
	
}
