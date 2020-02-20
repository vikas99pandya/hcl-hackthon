package com.ing.product;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.jboss.logging.LoggingClass;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ing.models.Product;
import com.ing.models.ProductDetails;
import com.ing.models.ProductGroup;
import com.ing.models.User;

@Service
public class ProductService {
	
	@Autowired
	private ProductRepository productRepository;
	
	@Autowired
	private ProductGroupRepository productGroupRepository;
	
	@Autowired
	private ProductDetailsRepository productDetailsRepository;
			
	
	
	public List<ProductGroup> getAllProductGroups() {
		return productGroupRepository.findAll();
	}

	public List<Product> getProducts(int groupId) {
		List<Product> finalLIst = new ArrayList();
		List<Product> listProduct=productRepository.findByUserId(1);
		 for(Product product:listProduct){
             if(product.getGroup().getId()==groupId){
				 finalLIst.add(product);
			 }

		 }
		 return finalLIst;
	}

	public List<ProductDetails> getProductDetails(int id) {
		return productDetailsRepository.findByProductId(id);

	}

}
