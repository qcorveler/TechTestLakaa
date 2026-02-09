package quentin.lakaa.techtest.DTO;

import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * IndicatorValueDTO sert à transférer les données des indicateurs d'une collecte particulière
 * */
@Data
@NoArgsConstructor
public class IndicatorValueDTO {
    private Long id;
    private String value;
    private String indicatorName;
    private String indicatorUnit;
    private Long indicatorId;
}
