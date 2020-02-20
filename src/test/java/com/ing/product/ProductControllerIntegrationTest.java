package com.ing.product;

import com.ing.UserAccountApp;
import com.ing.models.Product;
import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.util.ArrayList;
import java.util.Arrays;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@WebMvcTest(ProductController.class)
@ContextConfiguration(classes = UserAccountApp.class)
@Ignore
public class ProductControllerIntegrationTest {

    @Autowired
    private MockMvc mvc;

    @MockBean
    private ProductService productService;

    @Test
    @Ignore
    public void should_retrieve_all_product_groups_with_200() throws Exception {
        mvc.perform(MockMvcRequestBuilders.get("/productGroups")
                .accept(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.product").exists());
    }

    @Test
    @Ignore
    public void should_handle_empty_product_group_with_200() throws Exception {
        MvcResult result = mvc.perform(MockMvcRequestBuilders.get("/productGroups")
                .accept(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andExpect(status().isOk())
                .andReturn();

        String content = result.getResponse().getContentAsString();

        assertEquals("[]", content);
    }

    @Test
    @Ignore
    public void should_handle_not_found_product_group_with_404() throws Exception {
        mvc.perform(MockMvcRequestBuilders.get("/product/1234")
                .accept(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andExpect(status().isNotFound())
                .andExpect(MockMvcResultMatchers.jsonPath("$.description")
                        .value("error message to be inserted here"));
    }

    @Test
    @Ignore
    public void should_handle_empty_products_list_with_200() throws Exception {
        when(productService.getProducts(1234)).thenReturn(new ArrayList<>());
        MvcResult result = mvc.perform(MockMvcRequestBuilders.get("/product/1234")
                .accept(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andExpect(status().isNotFound())
                .andReturn();

        String content = result.getResponse().getContentAsString();

        assertEquals("[]", content);
    }

    @Test
    @Ignore
    public void should_handle_products_list_with_200() throws Exception {
        when(productService.getProducts(1234)).thenReturn(Arrays.asList(new Product(1, "name", 1, 1)));
        MvcResult result = mvc.perform(MockMvcRequestBuilders.get("/product/1234")
                .accept(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andExpect(status().isNotFound())
                .andReturn();

        String content = result.getResponse().getContentAsString();

        assertEquals("expected goes here", content);
    }
}