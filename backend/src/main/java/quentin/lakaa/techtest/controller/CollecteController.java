package quentin.lakaa.techtest.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import quentin.lakaa.techtest.model.Collecte;
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
    public ResponseEntity<Collecte> createCollecte(@RequestBody Collecte collecte) {
        return ResponseEntity.ok(collecteService.createCollecte(collecte));
    }

    @GetMapping
    public List<Collecte> getAllCollectes() {
        return collecteService.getAllCollectes();
    }
}
