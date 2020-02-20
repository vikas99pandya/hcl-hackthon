package com.ing.productDetails;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.ing.models.ProductDetails;
import com.ing.product.ProductService;

import java.util.List;

@RestController
public class ProductDetailsController {
	
	@Autowired
	private ProductService productService;
	
	@GetMapping("/productDetails/{id}")
	public List<ProductDetails> getProductDetails(@PathVariable int id) {
		return productService.getProductDetails(id);
	}
}
