package com.ing.product;

import org.junit.Ignore;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import static org.mockito.ArgumentMatchers.anyString;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(ProductController.class)
@Ignore
public class ProductControllerIntegrationTest {

    @Autowired
    private MockMvc mvc;

    @Test
    @Ignore
    public void should_retrieve_product_groups_with_200() throws Exception {
        mvc.perform(MockMvcRequestBuilders.get("/productGroups")
                .accept(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.product").exists());
    }

    @Test
    @Ignore
    public void should_handle_not_found_product_with_404() throws Exception {
        mvc.perform(MockMvcRequestBuilders.get("/productGroups")
                .accept(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andExpect(status().isNotFound())
                .andExpect(MockMvcResultMatchers.jsonPath("$.description").value(anyString()));
    }
}