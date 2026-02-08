package quentin.lakaa.techtest.request;

import lombok.Data;
import quentin.lakaa.techtest.DTO.IndicatorValueDTO;

import java.time.LocalDate;
import java.util.List;

@Data
public class CreateCollecteRequest {
    private LocalDate date;
    private String association;
    private List<IndicatorValueDTO> indicatorValues;
}
