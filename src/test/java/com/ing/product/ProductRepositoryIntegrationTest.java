package com.ing.product;

import com.ing.models.Product;
import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.junit.Assert.assertTrue;

@DataJpaTest
@RunWith(SpringRunner.class)
@Ignore
public class ProductRepositoryIntegrationTest {

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private ProductRepository productRepository;

    @Test
    @Ignore
    public void should_retrieve_groups_From_database() {
        Product product = new Product(1, "name", 1, 1);
        entityManager.persist(product);

        List<Product> byGroupId = productRepository.findByGroupId(1);

        assertTrue(byGroupId.contains(product));
    }

}