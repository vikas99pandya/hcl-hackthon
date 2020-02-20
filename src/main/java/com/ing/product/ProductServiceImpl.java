package com.ing.product;

import java.util.Arrays;
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
	
	
	@Override
	public List<ProductGroup> getAllProductGroups() {
		return productGroupRepository.findAll();
	}

	@Override
	public List<Product> getProducts(int groupId) {
		return productRepository.findByGroupId(groupId);
	}

	@Override
	public ProductDetails getProductDetails(int id) {
		List<ProductDetails> productDetailsList = productDetailsRepository.findByProductId(id);
		if(productDetailsList == null || productDetailsList.isEmpty()) {
			return new ProductDetails();
		}
		return productDetailsList.get(0);
	}

}
