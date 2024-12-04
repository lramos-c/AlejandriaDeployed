package org.alejandria.bookapp.services.DTO;

import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.util.Date;

// Aquí vamos a construir la clase con los atributos que si reciben información de Order y el atributo relacionado de User
@Getter @Setter
public class OrderDTO {

    private Date orderDate;
    private BigDecimal total;
    private Long idUser;

}
