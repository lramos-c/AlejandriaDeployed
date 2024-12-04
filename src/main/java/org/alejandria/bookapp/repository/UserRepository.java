package org.alejandria.bookapp.repository;

import jakarta.transaction.Transactional;
import org.alejandria.bookapp.model.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UserRepository extends JpaRepository<UserEntity,Long> {

    //JPQL
    @Query("SELECT u FROM UserEntity u WHERE u.email = ?1")
    UserEntity getByEmail(String email);

    //JPQL para actualizar password
    @Transactional
    @Query("UPDATE UserEntity u SET u.password = :password WHERE u.idUser = :idUser")
    @Modifying
    void updatePassword(@Param(value = "idUser") Long id, @Param(value = "password") String password);
}
