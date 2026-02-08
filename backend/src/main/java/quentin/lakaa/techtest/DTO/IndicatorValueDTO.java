package quentin.lakaa.techtest.DTO;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class IndicatorValueDTO {
    private Long id;
    private String value;
    private String indicatorName;
    private String indicatorUnit;
    private Long indicatorId;
}
