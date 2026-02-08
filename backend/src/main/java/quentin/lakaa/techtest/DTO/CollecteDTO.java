package quentin.lakaa.techtest.DTO;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;

@Data
@NoArgsConstructor
public class CollecteDTO {
    private Long id;
    private LocalDate date;
    private String association;
    private List<IndicatorValueDTO> indicatorValuesDTO;
}
