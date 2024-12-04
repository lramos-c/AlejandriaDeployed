package org.alejandria.bookapp.controller;

import org.alejandria.bookapp.exceptions.UserNotFoundException;
import org.alejandria.bookapp.model.UserEntity;
import org.alejandria.bookapp.services.DTO.UpdatePasswordUserDTO;
import org.alejandria.bookapp.services.UserService;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*",methods = {RequestMethod.GET,RequestMethod.POST})
@RequestMapping("/api/bda")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService){
        this.userService = userService;
    }

    @GetMapping("/users")
    public List<UserEntity> getUsers(){
        return this.userService.getAll();
    }

    @GetMapping("/users/{id}")
    public UserEntity getUserById(@PathVariable Long id) {
        return this.userService.getById(id);
    }


    @PostMapping
    public ResponseEntity<UserEntity> newUser(@Validated @RequestBody UserEntity user) {

        if(this.userService.getByEmail(user.getEmail()) != null) {
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }

        return ResponseEntity.ok(this.userService.createUser(user));
    }

    @DeleteMapping("/delete/{id}")
    public void deleteUser(@PathVariable Long id){
        this.userService.deleteUser(id);
    }

    //Metodo para recuperar un user por email utilizando la query personalizada y la clase Response Entity
    @GetMapping("/email/{email}")
    public ResponseEntity<UserEntity> getByEmail(@PathVariable String email){
        UserEntity userByEmail = this.userService.getByEmail(email);
        if(userByEmail == null) {
            return ResponseEntity.notFound().build();
        }

        return new ResponseEntity<UserEntity>(userByEmail, HttpStatus.OK);

    }

    @PatchMapping("/password")
    public ResponseEntity<Void> updatePassword(@RequestBody UpdatePasswordUserDTO dto) {
        try {
            this.userService.updatePassword(dto);
            return ResponseEntity.ok().build();
        } catch (UserNotFoundException e) {
            return ResponseEntity.notFound().build();
        }

        }
    }
