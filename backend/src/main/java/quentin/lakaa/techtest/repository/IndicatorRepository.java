package quentin.lakaa.techtest.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import quentin.lakaa.techtest.model.Indicator;

public interface IndicatorRepository extends JpaRepository<Indicator, Long> {
}
