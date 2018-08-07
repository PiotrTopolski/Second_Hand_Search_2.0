package com.ptopolski.second_hand_search.controller;

import com.ptopolski.second_hand_search.model.Shop;
import com.ptopolski.second_hand_search.repository.ShopRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/shops")

public class ShopController {

    @Autowired
    ShopRepository shopRepository;

    @GetMapping("/all")
    public List<Shop> getAll(){
        return (List<Shop>) shopRepository.findAll();
    }
}
