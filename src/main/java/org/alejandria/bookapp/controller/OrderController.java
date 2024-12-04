package org.alejandria.bookapp.controller;


import org.alejandria.bookapp.model.OrderEntity;
import org.alejandria.bookapp.services.DTO.OrderDTO;
import org.alejandria.bookapp.services.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*",methods = {RequestMethod.GET,RequestMethod.POST})
@RequestMapping("/api/order")
public class OrderController {

    private final OrderService orderService;

    @Autowired
    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @GetMapping
    public List<OrderEntity> getAll(){
        return this.orderService.getOrders();
    }

    //Metodo para mapear una nueva order
    @PostMapping("/create")
    public ResponseEntity<OrderEntity> createOrder(@RequestBody OrderDTO dto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(this.orderService.createOrder(dto));
    }



}