package com.example.demo.controllers;

import com.example.demo.Models.Enclosure;
import com.example.demo.repositories.EnclosureRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/enclosures")
public class EnclosureController {
    @Autowired
    EnclosureRepository enclosureRepository;

    @GetMapping
    public List<Enclosure> findAllEnclosures(){
        return enclosureRepository.findAll();
    }
}
