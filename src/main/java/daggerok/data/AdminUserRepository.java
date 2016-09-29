package daggerok.data;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.List;
import java.util.Optional;

@RepositoryRestResource(
        path = "users", // /api/{entityName(s)}
        itemResourceRel = "user", // _embedde.{entityName(s)}._links.{entityName}
        collectionResourceRel = "users") // _embedde.{entityName(s)}
public interface AdminUserRepository extends MongoRepository<AdminUser, String> {

    PasswordEncoder PASSWORD_ENCODER = new BCryptPasswordEncoder();

    Optional<AdminUser> findByUsername(final String username);

    default AdminUser encodePasswordAndSave(AdminUser adminUser) {
        return save(adminUser.setPassword(PASSWORD_ENCODER.encode(adminUser.getPassword())));
    }

    @Override
    @PreAuthorize("hasAuthority('SUPERADMIN')")
    <S extends AdminUser> S save(S entity);

    @Override
    @PreAuthorize("hasAuthority('SUPERADMIN')")
    <S extends AdminUser> List<S> save(Iterable<S> entites);

    @Override
    @PreAuthorize("hasAuthority('SUPERADMIN')")
    <S extends AdminUser> S insert(S entity);

    @Override
    @PreAuthorize("hasAuthority('SUPERADMIN')")
    <S extends AdminUser> List<S> insert(Iterable<S> entities);
}
