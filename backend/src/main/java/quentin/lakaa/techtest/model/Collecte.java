package quentin.lakaa.techtest.model;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity
public class Collecte {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDate date;

    private String association;

    @OneToMany(mappedBy = "collecte", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<IndicatorValue> indicatorValues = new ArrayList<>();

}
