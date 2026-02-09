package quentin.lakaa.techtest.request;

import lombok.Data;
import quentin.lakaa.techtest.DTO.IndicatorValueDTO;

import java.time.LocalDate;
import java.util.List;


/**
 * CreateCollecteRequest est un objet qu'on reçoit quand on doit ajouter une collecte à la base.
 * Contient aussi les valeurs d'indicateurs à ajouter dans la base (l'indicateur est déjà créé à ce moment)
 * */
@Data
public class CreateCollecteRequest {
    private LocalDate date;
    private String association;
    private List<IndicatorValueDTO> indicatorValues;
}
