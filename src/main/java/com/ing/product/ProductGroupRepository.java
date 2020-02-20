package com.ing.product;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ing.models.ProductGroup;

@Repository
public interface ProductGroupRepository extends JpaRepository<ProductGroup, Integer>{

}
