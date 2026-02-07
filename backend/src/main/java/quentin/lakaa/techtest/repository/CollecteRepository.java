package quentin.lakaa.techtest.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import quentin.lakaa.techtest.model.Collecte;

public interface CollecteRepository extends JpaRepository<Collecte, Long> {
}
