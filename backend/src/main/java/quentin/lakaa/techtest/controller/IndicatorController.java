package quentin.lakaa.techtest.controller;

import org.springframework.web.bind.annotation.*;
import quentin.lakaa.techtest.model.Indicator;
import quentin.lakaa.techtest.service.IndicatorService;

import java.util.List;

@RestController
@RequestMapping("/api/indicators")
@CrossOrigin(origins = "http://localhost:4200")
public class IndicatorController {

    private final IndicatorService indicatorService;

    public IndicatorController(IndicatorService indicatorService) {
        this.indicatorService = indicatorService;
    }

    @PostMapping
    public Indicator create(@RequestBody Indicator indicator) {
        return indicatorService.createIndicator(indicator);
    }

    @GetMapping
    public List<Indicator> getAll() {
        return indicatorService.getAllIndicators();
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        indicatorService.deleteIndicator(id);
    }
}
