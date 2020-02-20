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
public class ProductServiceImpl implements ProductService{

	private User loggedIndUser = new User(1,"ahmed", "asaleh", "1234");
	
	@Autowired
	private ProductRepository productRepository;
	
	@Autowired
	private ProductGroupRepository productGroupRepository;
	
	@Autowired
	private ProductDetailsRepository productDetailsRepository;
	
	private List<ProductGroup> productGroups = Arrays.asList(
			new ProductGroup(1, "saving"),
			new ProductGroup(2, "morkage")
			);
	
	private List<Product> products = Arrays.asList(
			new Product(1,"orange", loggedIndUser.getId(), productGroups.get(0).getId()),
			new Product(2,"child", loggedIndUser.getId(), productGroups.get(0).getId()),
			new Product(3,"interest", loggedIndUser.getId(), productGroups.get(0).getId()),
			new Product(4,"morkage", loggedIndUser.getId(), productGroups.get(1).getId())
			);
	
	private List<ProductDetails> productDetails = Arrays.asList(
			new ProductDetails(1, "orange", 12.12, "main account", 1),
			new ProductDetails(2, "child", 12.12, "child account", 2),
			new ProductDetails(3, "interest", 12.12, "interest account", 3),
			new ProductDetails(4, "morkage", 12.12, "morkage account", 4)
			);
			
	
	
	@Override
	public List<ProductGroup> getAllProductGroups() {
		return productGroups;
//		return productGroupRepository.findAll();
	}

	@Override
	public List<Product> getProducts(int groupId) {
		return products.stream().filter(p -> p.getGroup().getId() == groupId).collect(Collectors.toList());
//		return productRepository.findByGroupId(groupId);
	}

	@Override
	public ProductDetails getProductDetails(int id) {
		Optional<ProductDetails> productDetailOptional = productDetails.stream().filter(p -> p.getProduct().getId() == id).findFirst();
		if(productDetailOptional.isPresent()) {
			return productDetailOptional.get();
		}
		return new ProductDetails();
		
//		List<ProductDetails> productDetailsList = productDetailsRepository.findByProductId(id);
//		if(productDetailsList == null || productDetailsList.isEmpty()) {
//			return new ProductDetails();
//		}
//		return productDetailsList.get(0);
	}

}
