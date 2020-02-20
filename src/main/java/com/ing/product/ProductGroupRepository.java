package com.ing.product;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ing.models.ProductGroup;

public interface ProductGroupRepository extends JpaRepository<ProductGroup, Integer>{

}
