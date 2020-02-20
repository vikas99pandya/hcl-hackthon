package com.ing.product;

import java.util.List;

import org.jboss.logging.LoggingClass;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ing.models.Product;
import com.ing.models.ProductDetails;
import com.ing.models.ProductGroup;
import com.ing.models.User;

@Service
public class ProductServiceImpl implements ProductService{

	private User loggedIndUser = new User("ahmed", "asaleh", "1234");
	
	@Autowired
	private ProductRepository productRepository; 
	
	@Autowired
	private ProductGroupRepository productGroupRepository;
	
	@Override
	public List<ProductGroup> getAllProductGroups() {
		return productGroupRepository.findAll();
	}

	@Override
	public List<Product> getProducts(int groupId) {
		return productRepository.findByGroupId(groupId);
	}

}
