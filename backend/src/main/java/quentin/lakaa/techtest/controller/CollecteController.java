package quentin.lakaa.techtest.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import quentin.lakaa.techtest.DTO.CollecteDTO;
import quentin.lakaa.techtest.model.Collecte;
import quentin.lakaa.techtest.request.CreateCollecteRequest;
import quentin.lakaa.techtest.service.CollecteService;

import java.util.List;

@RestController
@RequestMapping("/api/collectes")
@CrossOrigin(origins = "http://localhost:4200")
public class CollecteController {

    private final CollecteService collecteService;

    public CollecteController(CollecteService collecteService) {
        this.collecteService = collecteService;
    }

    @PostMapping
    public ResponseEntity<Collecte> createCollecte(@RequestBody CreateCollecteRequest collecte) {
        return ResponseEntity.ok(collecteService.createCollecte(collecte));
    }

    @GetMapping
    public List<CollecteDTO> getAllCollectes() {
        System.out.println("GET Collectes reçu");
        return collecteService.getAllCollectes();
    }
}
