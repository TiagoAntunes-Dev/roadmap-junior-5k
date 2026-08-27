package com.senac.tsi.MinhaPrimeiraApi;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

    @GetMapping
    public String HelloWorld(){
        return "Hello World";
    }
}
