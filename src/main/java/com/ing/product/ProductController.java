package com.ing.product;

import com.ing.models.Product;
import com.ing.models.ProductGroup;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ProductController {

    private static Logger logger = LoggerFactory.getLogger(ProductController.class);

    @Autowired
    private ProductService productService;
    
    @GetMapping("/productGroups")
    public List<ProductGroup> getAllProductGroups() {
        return productService.getAllProductGroups();
    }
    
    @GetMapping("/products/{groupId}")
    public List<Product> getProduc(@PathVariable int groupId) {
    	return productService.getProducts(groupId);
    }

}


