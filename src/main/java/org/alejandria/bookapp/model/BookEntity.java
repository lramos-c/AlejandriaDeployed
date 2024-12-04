package org.alejandria.bookapp.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.mapping.Set;

import java.math.BigDecimal;
import java.util.Date;

@Entity
@Table(name = "books")
@Data
@NoArgsConstructor
public class BookEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "book_id")
    private Long bookId;

    @Column(name = "price",nullable = false,columnDefinition = "DECIMAL(6,2)")
    private Double price;

    @Column(name = "cost",nullable = false,precision = 6,scale = 2)
    private BigDecimal cost;

    @Column(name ="author",length = 50,nullable = false)
    private String author;

    @Column(name ="isbn",length = 15)
    private String isbn;

    @Column(name = "title",nullable = false)
    private String title;

    @Column(name = "publisher",length = 45, nullable = false)
    private String publisher;

    @Column(name = "date_published")
    private Date datePublished;

    @Column(name = "page_count")
    private Integer pageCount;

    @Column(name = "stock",nullable = false)
    private Integer stock = 1;

    @Column(name = "language" )
    private String language = "Español";

    @Column(name = "format")
    private String format;

    @Column(name = "description")
    private String description;

    @Column(name = "cover_img")
    private String coverImg;

    @Column(name = "category")
    private String category;


}
