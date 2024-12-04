package org.alejandria.bookapp.services;


import org.alejandria.bookapp.model.OrderEntity;
import org.alejandria.bookapp.model.UserEntity;
import org.alejandria.bookapp.repository.OrderRepository;
import org.alejandria.bookapp.repository.UserRepository;
import org.alejandria.bookapp.services.DTO.OrderDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.alejandria.bookapp.exceptions.UserNotFoundException;

import java.util.List;

@Service
public class OrderService {

    private final OrderRepository orderRepository;

    private final UserRepository userRepository;

    @Autowired
    public OrderService(OrderRepository orderRepository, UserRepository userRepository) {
        this.orderRepository = orderRepository;
        this.userRepository = userRepository;
    }


    //GetAllOrders()
    public List<OrderEntity> getOrders(){
        return  this.orderRepository.findAll();
    }

    //Crear una orden que este relacionado con un User (dto)
    public OrderEntity createOrder(OrderDTO dto){

        //Buscar el user mediante Id
        UserEntity user = this.userRepository.findById(dto.getIdUser()).orElseThrow(() -> new UserNotFoundException(dto.getIdUser()));

        //Crear la Orden con los atributos de DTO
        OrderEntity order = new OrderEntity();
        order.setOrderDate(dto.getOrderDate());;
        order.setTotal(dto.getTotal());
        order.setUser(user);

        return this.orderRepository.save(order);
    }

}