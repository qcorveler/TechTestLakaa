package quentin.lakaa.techtest.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class IndicatorValue {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String value;

    @ManyToOne(optional = false)
    private Collecte collecte;

    @ManyToOne(optional = false)
    private Indicator indicator;
}