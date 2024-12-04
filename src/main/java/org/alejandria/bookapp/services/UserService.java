package org.alejandria.bookapp.services;

import org.alejandria.bookapp.exceptions.UserNotFoundException;
import org.alejandria.bookapp.model.UserEntity;
import org.alejandria.bookapp.repository.UserRepository;
import org.alejandria.bookapp.services.DTO.UpdatePasswordUserDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    //Metodo para obtener todos los users
    public List<UserEntity> getAll() {
        return this.userRepository.findAll();
    }

    //Metodo para obtener un usuario por id
    public UserEntity getById(Long id) {
        return this.userRepository.findById(id).orElseThrow(() -> new UserNotFoundException(id));
    }

    //Metodo para obtener un usuario por email
    public UserEntity getByEmail(String email){
        return this.userRepository.getByEmail(email);
    }

    //Metodo para crear un nuevo usuario
    public UserEntity createUser(UserEntity newUser){
        return this.userRepository.save(newUser);
    }

    //Metodo para borrar un usuario
    public void deleteUser(Long id){
        if (this.userRepository.existsById(id)){
            this.userRepository.deleteById(id);
        }
        else throw new UserNotFoundException(id);
    }

//    PUT -> Actualizando la entidad (Entity)
//    public UserEntity updateUser(UserEntity user, Long id){
//        return userRepository.findById(id).map( userMap -> {
//            userMap.setPassword(user.getPassword());
//            userMap.setTelephone(user.getTelephone());
//            return userRepository.save(userMap);
//        }).orElseThrow( () -> new UserNotFoundException(id));
//    }

    // Metodo para actualizar la contraseña
    public void updatePassword(UpdatePasswordUserDTO dto){
        if(!this.userRepository.existsById(dto.getIdUser())){
            throw   new UserNotFoundException(dto.getIdUser());
        }
        this.userRepository.updatePassword(dto.getIdUser(), dto.getPassword());
    }

}
