package org.alejandria.bookapp.repository;

import org.alejandria.bookapp.model.OrderEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<OrderEntity,Long> {

}
