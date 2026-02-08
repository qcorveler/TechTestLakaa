package quentin.lakaa.techtest.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import lombok.ToString;

@Data
@Entity
public class IndicatorValue {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String value;

    @ManyToOne(optional = false)
    @JsonIgnore
    @ToString.Exclude
    private Collecte collecte;

    @ManyToOne(optional = false)
    private Indicator indicator;
}