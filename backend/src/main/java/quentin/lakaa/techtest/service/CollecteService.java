package quentin.lakaa.techtest.service;

import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;
import quentin.lakaa.techtest.DTO.CollecteDTO;
import quentin.lakaa.techtest.DTO.IndicatorValueDTO;
import quentin.lakaa.techtest.model.Collecte;
import quentin.lakaa.techtest.model.IndicatorValue;
import quentin.lakaa.techtest.repository.CollecteRepository;
import quentin.lakaa.techtest.repository.IndicatorRepository;
import quentin.lakaa.techtest.repository.IndicatorValueRepository;
import quentin.lakaa.techtest.request.CreateCollecteRequest;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class CollecteService {

    private final CollecteRepository collecteRepository;
    private final IndicatorRepository indicatorRepository;
    private final IndicatorValueRepository indicatorValueRepository;

    public CollecteService(CollecteRepository collecteRepository,
                           IndicatorRepository indicatorRepository,
                           IndicatorValueRepository indicatorValueRepository) {
        this.collecteRepository = collecteRepository;
        this.indicatorRepository = indicatorRepository;
        this.indicatorValueRepository = indicatorValueRepository;
    }

    public Collecte createCollecte(CreateCollecteRequest request) {
        Collecte collecte = new Collecte();
        collecte.setDate(request.getDate());
        collecte.setAssociation(request.getAssociation());
        collecte = collecteRepository.save(collecte);

        Collecte finalCollecte = collecte;
        List<IndicatorValue> indicatorValues = request.getIndicatorValues().stream()
                .map(v -> {
                    IndicatorValue iv = new IndicatorValue();
                    iv.setCollecte(finalCollecte); // ← c’est ici qu’on rattache
                    iv.setIndicator(indicatorRepository.findById(v.getIndicatorId()).orElseThrow());
                    iv.setValue(v.getValue());
                    return iv;
                })
                .toList();

        indicatorValueRepository.saveAll(indicatorValues);
        collecte.setIndicatorValues(indicatorValues);

        return collecte;
    }

    public List<CollecteDTO> getAllCollectes() {
        List<CollecteDTO> res = null;
        res = collecteRepository.findAll().stream().map(collecte -> {
            CollecteDTO dto = new CollecteDTO();
            dto.setId(collecte.getId());
            dto.setDate(collecte.getDate());
            dto.setAssociation(collecte.getAssociation());
            dto.setIndicatorValuesDTO(
                    collecte.getIndicatorValues().stream().map(val -> {
                        IndicatorValueDTO ivDto = new IndicatorValueDTO();
                        ivDto.setId(val.getId());
                        ivDto.setValue(val.getValue());
                        ivDto.setIndicatorName(val.getIndicator().getName());
                        ivDto.setIndicatorUnit(val.getIndicator().getUnit());
                        ivDto.setIndicatorId(val.getIndicator().getId());
                        return ivDto;
                    }).toList()
            );
            return dto;
        }).toList();
        return res;
    }
}