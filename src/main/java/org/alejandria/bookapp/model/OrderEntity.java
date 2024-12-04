package org.alejandria.bookapp.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.mapping.Set;
import java.math.BigDecimal;
import java.util.Date;

@Entity
@Table(name = "orders")
@Data
@NoArgsConstructor
public class OrderEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_order")
    private Long orderId;

    @Column(name = "order_date",nullable = false)
    private Date orderDate;

    @Column(name = "total",nullable = false,columnDefinition = "DECIMAL(10,2)")
    private BigDecimal total;

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "id_user",referencedColumnName = "id_user")
    private UserEntity user;


}
