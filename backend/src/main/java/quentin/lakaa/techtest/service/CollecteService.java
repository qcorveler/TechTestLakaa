package quentin.lakaa.techtest.service;

import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;
import quentin.lakaa.techtest.model.Collecte;
import quentin.lakaa.techtest.repository.CollecteRepository;

import java.util.List;

@Service
@Transactional
public class CollecteService {

    private final CollecteRepository collecteRepository;

    public CollecteService(CollecteRepository collecteRepository) {
        this.collecteRepository = collecteRepository;
    }

    public Collecte createCollecte(Collecte collecte) {
        return collecteRepository.save(collecte);
    }

    public List<Collecte> getAllCollectes() {
        return collecteRepository.findAll();
    }
}