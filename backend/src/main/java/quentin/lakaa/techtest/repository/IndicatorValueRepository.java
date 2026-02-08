package quentin.lakaa.techtest.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import quentin.lakaa.techtest.model.IndicatorValue;

public interface IndicatorValueRepository extends JpaRepository<IndicatorValue, Long> {
}
